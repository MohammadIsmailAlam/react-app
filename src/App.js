// import './App.css';
import Home from './Home';
import NavBar from './Navbar';
// import BlogDetails from './BlogDetails';
function App() {
  return (
    <div className = "App">
      <NavBar />
      <div className = "content">
        <Home />
      </div>
    </div>
  )
}
export default App;

// function App() {
//   const title = "Welcome";
//   const likes = 50;
//   const link = "https://www.google.com";
//   return (
//     <div className="App">
//       <Blogs />
//      <NavBar />
//       <Home/>
//       <BlogDetails />
//       <div className = "content">
//         <h1>App Name React</h1>
//         <Home/>
//         <h2>{title}</h2>
//         <p>Get {likes} time</p>
//         <p>{"helllo to all"}</p>
//         <p>{ Math.random() *5}</p>
//         <a href={link}> Google Site</a>
//       </div>
//     </div>

//   );

// }
// export default App;