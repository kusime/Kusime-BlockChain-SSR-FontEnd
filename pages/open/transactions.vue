<script setup lang="ts">
const { data: transactions, pending } = get_transactions()

// [
//     {
//         "amount": 1.3,
//         "recipient": "30819f300d06092a864886f70d010101050003818d0030818902818100c809b0c44b02593ca3dd715ac1d04dc22211dc0c12df9217766937eb293be67309fbc26e031bbc498d52dd65e1253ea53229189e3aff70f8a3ab1cca48899d08edc7676238d6a5263926b0dc8b8ccabdbf828ce7ddbf0eaa75e2ebc2dfc30ac7398f7ec28d0c728f3a662902fabbbc8093199625bb2b1e378a5bbb1fab3268ef0203010001",
//         "sender": "30819f300d06092a864886f70d010101050003818d0030818902818100cb438678b3d8f9fc0010d7a1db2ad52e9c7e9d18a29b4bddda40bb10729dd4ebd0e92358435fdaa2a647094bbe7f2d16df5630faedbfc4ea8734b2007a54884464a438a53d9bff07fc26df42831d9649650740952472eeac1795ee0d6806d5505b17c6ad4d7dc94231e5c8c86ff157fb4ada68b8074a2383a13359c7a756610b0203010001",
//         "signature": "0d70b468fa289e9124859f0a28bb750a237d129916ac552f0555d2e92311aa723a377a74d04796e6cfc9b2b5a98b37ad6a4c5f80a9f98e2fdbaccc6fd9c61100682698d8630b3eec5f3325de4450f49dcfdb2febafdeaf1778b6730e9b559eb5ffbe0c7c4699bdce8cc3fb3abdba1f0bbc12508d09fb1139866ede41ada0ec6f",
//         "timestamp": 1671280553.6005433
//     }
// ]
</script>

<template>
  <div v-if="!pending">
    <FunctionalKTitle title="Transactions" />
    <ol class="p-10">
      <li
        v-if="transactions.length !== 0"
        v-for="(tran, index) in transactions"
        :key="tran"
        :class="`border-l-2 ${
          index % 2 == 0 ? 'border-green-600' : 'border-red-600'
        }`"
      >
        <div class="md:flex flex-start">
          <IconTrans />
          <div class="">
            <h1></h1>
            <div
              class="min-hv-4 overflow-y-auto flex-grow p-4"
              style="max-height: calc(60vh - 56px)"
            >
              <div class="flex flex-col space-y-8">
                <RepresentTransactionCard
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
      </li>
      <div
        v-else
        class="w-full text-white flex items-center justify-center flex-col -translate-y-24"
      >
        <div class="text-[8rem] dark:text-white text-black">
          No transactions
        </div>

        <InteractKLink to="/open/chain"> Checkout Chain </InteractKLink>
      </div>
    </ol>
  </div>
  <VisualableKLoading v-else />
</template>
