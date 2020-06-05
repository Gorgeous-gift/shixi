import axios from 'axios'
export const submit = ({ id }) => {
  return axios.post('https://node1.gxb.io/rpc/get_block', {
    "jsonrpc": "2.0",
    "method": "call",
    "params": [0, "get_dynamic_global_properties", []],
    "id": id
  })
};