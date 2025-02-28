import Title from './components/Title';
import FirstRequest from './examples/1-first-request';
import Headers from './examples/2-headers';
import Interceptors from './examples/6-interceptors';
import PostRequest from './final/examples/3-post-request';

function App() {
  return (
    <main>
      <Title />
      {/* <FirstRequest /> */}
      {/* <Headers /> */}
      
      {/* <PostRequest /> */}
      <Interceptors/>
      
    </main>
  );
}

export default App;
