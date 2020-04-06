import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Logins from "./page/logins";
import Admin from "./page/admin";
import Buttons from "./page/ui/buttons";
import Moadls from "./page/ui/modals";
import Loadings from "./page/ui/loadings";
import Notice from "./page/ui/notice";
import Messages from "./page/ui/messages";
import Tabs from "./page/ui/tabs";
import Gallery from "./page/ui/gallery";
import Carousel from "./page/ui/carousel";
import Login from "./page/form/login";
import Register from "./page/form/register";
import Basictable from "./page/table/basicTable";
import NoMatch from "./page/nomatch/index";

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Logins}></Route>
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Moadls}></Route>
                  <Route path="/admin/ui/loadings" component={Loadings}></Route>
                  <Route path="/admin/ui/notification" component={Notice}></Route>
                  <Route path="/admin/ui/messages" component={Messages}></Route>
                  <Route path="/admin/ui/tabs" component={Tabs}></Route>
                  <Route path="/admin/ui/gallery" component={Gallery}></Route>
                  <Route path="/admin/ui/carousel" component={Carousel}></Route>
                  <Route path="/admin/form/login" component={Login}></Route>
                  <Route path="/admin/form/reg" component={Register}></Route>
                  <Route path="/admin/table/basic" component={Basictable}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            )}
          ></Route>
          <Route path="/order" component={Logins}></Route>
        </App>
      </HashRouter>
    );
  }
}
