import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import Container from 'react-bootstrap/Container'
import useFetch from "../hooks/useFetch"
import Spinner from 'react-bootstrap/Spinner'

const baseUrl = 'http://localhost:5000/files/data'

const DataTable = () => {
  const [partialQuery, setPartialQuery] = useState("")
  const [query, setQuery] = useState("")
  const url =  `${baseUrl}${query ? `?fileName=${query}` : ""}`
  const { data, isLoading, error } = useFetch(url)

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setQuery(partialQuery);
    }
  };

  if (isLoading) {
    return (
      <Container className="text-center">
        <Spinner/>
      </Container>
    )
  }

  if (error) {
    return <h2 className="text-center">Error: {error.message}</h2>
  }

  return (
    <>
      <Container className="border text-center py-2">
        <label className="mx-2" htmlFor={'input-filename'}>Filter by File Name (Press Enter to filter) </label>
        <input 
          id={'input-filename'}
          type="text" 
          value={partialQuery} 
          placeholder='Enter a File Name...'
          onKeyDown={handleKeyPress} 
          onChange={(e) => setPartialQuery(e.target.value)}
          size={50}
        />
        <h6 className="pt-2">Current Filter: {query ? `${query}` : '(No Filter)'}</h6>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, fileIndex) => ( 
            file.lines.map((line, lineIndex) =>  
              <tr key={fileIndex*1000000+lineIndex}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default DataTable
