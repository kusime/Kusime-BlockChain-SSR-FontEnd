<script setup lang="ts">
definePageMeta({})

const { data: block_chain, pending } = useLazyFetch('/api/base_info/chain')
// {
//         "data": [
//             {
//                 "amount": 10,
//                 "recipient": "30819f300d06092a864886f70d010101050003818d0030818902818100cb438678b3d8f9fc0010d7a1db2ad52e9c7e9d18a29b4bddda40bb10729dd4ebd0e92358435fdaa2a647094bbe7f2d16df5630faedbfc4ea8734b2007a54884464a438a53d9bff07fc26df42831d9649650740952472eeac1795ee0d6806d5505b17c6ad4d7dc94231e5c8c86ff157fb4ada68b8074a2383a13359c7a756610b0203010001",
//                 "sender": "30819f300d06092a864886f70d010101050003818d0030818902818100c8501b7d73404a8f101cf011827d261662ee9b17195f0b297da79604114c48fa3f161cb13d8e039ceefdfb03cb559bcef332c6a3713d74d04b948e363019b1472265ef92efeb3ea6ee91ad585369fdf8e155582756e93ccf8bef9ef8062ed2535d52af1e6f11cd03e1a34e98436b278afab544c3cf28c0aa8e27af2ddd8b19030203010001",
//                 "signature": "babc50f5146fdf924c239d3b7fcefccf5d7d7725d69e65310c9aaddb64f5cc7d0de95013320f1373b17c4d1b76efc021d11b21289ccd8ec7acb665a3a3e50a9c4daabfef3b098b86ce131b389f241680b3557d21ec8517119e7579f0278c4e617c1c3354de9b91995f83c56a3cfa27afde461b7e768515336cce5b202f9ea9ca",
//                 "timestamp": 1671272504.7290378
//             }
//         ],
//         "index": 1,
//         "previous_block_hash": "46b693f0e1cabb878e3240fc5c084efef1d82918692bb8e2f435a568aee2913b",
//         "proof": 30,
//         "timestamp": 1671272505.2566216
//     },
</script>

<template>
  <div v-if="!pending">
    <FunctionalKTitle title="BlockChain" />
    <RepresentChainState :block_chain="block_chain" />
    <ol class="p-10">
      <li
        v-for="(block, index) in block_chain"
        :key="block.index"
        :class="`border-l-2 ${
          index % 2 == 0 ? 'border-green-600' : 'border-red-600'
        }`"
      >
        <div class="md:flex flex-start">
          <IconBlock />
          <div
            class="flex flex-col space-y-5 p-6 rounded-lg shadow-lg bg-gray-100 ml-6 mb-10"
          >
            <!-- block header  -->
            <table class="table w-full border-2">
              <!-- head -->
              <thead>
                <tr>
                  <th>Block Index</th>
                  <th>Block Proof</th>
                  <th>Block Timestamp</th>
                  <th>Previous Block Hash</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover">
                  <td :id="block.index">{{ block.index }}</td>
                  <td>{{ block.proof }}</td>
                  <td>{{ block.timestamp }}</td>
                  <td>{{ block.previous_block_hash }}</td>
                </tr>
              </tbody>
            </table>

            <!-- block transactions field -->
            <div
              class="flex flex-col rounded-xl border-4 duration-500 border-gray-300 hover:border-gray-500 overflow-hidden shadow-xl min-hv-4 max-hv-9"
            >
              <div
                class="h-14 bg-white border-b hover:bg-brand transition-all gap-2 p-4 flex flex-row items-center"
              >
                <span class="flex-grow font-bold">Block Payload</span>
              </div>
              <div class="">
                <h1></h1>
                <div
                  class="min-hv-4 overflow-y-auto flex-grow p-4"
                  style="max-height: calc(60vh - 56px)"
                >
                  <div class="flex flex-col space-y-8">
                    <RepresentTransactionCard
                      v-for="tran in block.data"
                      :key="tran"
                      :sender="tran.sender"
                      :amount="tran.amount"
                      :recipient="tran.recipient"
                      :timestamp="tran.timestamp"
                      :signature="tran.signature"
                    >
                    </RepresentTransactionCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
  <VisualableKLoading v-else />
</template>
