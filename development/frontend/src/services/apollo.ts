import ApolloClient from 'apollo-boost';
import { BACKEND_URI } from './config';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: BACKEND_URI + '/graphql'
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
