import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import History from "./pages/History";
import Items from "./pages/Items";
import NotFound from "./components/NotFound";
import { AppProvider } from "./context/context";
import { ListProvider } from "./context/shopping_list_context";
import { HistoryProvider } from "./context/history_context";
import HistorySingleList from "./components/HistorySingleList";
import Home from "./pages/Home";

const rootElement = document.getElementById("root");
render(
  <AppProvider>
    <ListProvider>
      <HistoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<App />}>
              <Route path="items" element={<Items />} />
              <Route path="history" element={<History />} />
              <Route path="history/:id" element={<HistorySingleList />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HistoryProvider>
    </ListProvider>
  </AppProvider>,
  rootElement
);
