import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*/}</div>;
}
const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;