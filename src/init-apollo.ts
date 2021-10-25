import {setApolloClient} from '~/utils/apollo-client'
import runtimeArgs from '~/runtime-args'

export default function initApollo () {
  // setApolloClient('main', runtimeArgs.EJ_ENV_MDS_GRAPHQL_HTTP)
  setApolloClient('da', runtimeArgs.EJ_ENV_DA_GRAPHQL_HTTP)
}
