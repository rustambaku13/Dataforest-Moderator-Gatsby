import { ms_main, ms_auth } from './../index';
import { flowResult } from 'mobx';
import { makeAutoObservable } from 'mobx';
import Cookies from "js-cookie";
import { getLoggenInUser, loginUser } from '../api/user';
class UserStore{
    me = null;
    token = null;
    identifiedUser = false;
    constructor() {
      makeAutoObservable(this);
  
      const token = Cookies.get("token");
      if (token) {
        flowResult(this.login_cookie(token)).then(() => {
          this.identifiedUser = true;
        });
        return;
      }
      this.identifiedUser = true;
    }
    *login_cookie(token) {
        try {          
          this.token = token;
          console.log(token)
          ms_main.defaults.headers["Authorization"] = `Bearer ${this.token}`;
          ms_auth.defaults.headers["Authorization"] = `Bearer ${this.token}`;
          const {data} = yield getLoggenInUser(token)
          
          this.me = data;
        } catch (err) {
          // this.logout();
        }
      }
      *login(credentials) {
        const { data } = yield loginUser(credentials);
        this.token = data.token;
        this.me = data.user;
        ms_main.defaults.headers["Authorization"] = `Bearer ${this.token}`;
        ms_auth.defaults.headers["Authorization"] = `Bearer ${this.token}`;
        Cookies.set("token", this.token);
        return data;
      }

      
}

const a = new UserStore()


export default a