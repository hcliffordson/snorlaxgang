import ApolloClient from 'apollo-boost';

import Vue from 'vue';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql'
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
