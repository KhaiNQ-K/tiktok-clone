import { DefaultLayout } from '@/components/Layout';
import { publicRoutes } from '@/routes';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, idx) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
