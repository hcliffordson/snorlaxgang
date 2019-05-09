import ApolloClient from 'apollo-boost';
import { BACKEND_URI } from './config';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: BACKEND_URI + '/graphql',
  request: async (op) => {
    const token = localStorage.getItem('jwt');
    if (!!token && token !== '') {
      op.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  }
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
