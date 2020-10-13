import React, { useContext } from 'react';
import NoteCards from '../components/NoteCards/NoteCards';
import Folders from '../components/Folders/Folders';
import SearchButton from '../components/SearchButton/SearchButton';
import './Home.scss';
import Container from 'react-bootstrap/Container';
import { StoreContext } from '../context'
// import InputContainer from '../components/Input/InputContainer'

function App() {
  const context = useContext(StoreContext)
  const { data } = context
  console.log(data)
  const handleSearchClick = (search_file) => {
    search_file = search_file.toLowerCase();
    var new_collections = [];
    for (var i = 0; i < this.state.collections.length; i++) {
      if (this.state.collections[i].path.split("\\").pop().toLowerCase().includes(search_file)) {
        new_collections.push(this.state.collections[i]);
      }
    }
  }

  return (
    <>
      <header className="home-header">
        <h1 className="title">Home</h1>
        <div className="controls">
          <SearchButton collections={data} onSearchChange={handleSearchClick} />
          <i className="fas fa-plus-circle fa-lg"></i>
          <img className="user" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3f_mCLpkLWSbUPVBMkI1-ZUUFP-dqFeFGUCDOc1lzuWUQxROe&usqp=CAU" />
        </div>
      </header>
      <div className="Content">
        <Container className="container">
          <Folders data={data}/>
          <NoteCards data={data} />
        </Container>
      </div>
    </>
  );
}

export default App;
