import {createAdhese} from "@adhese/sdk";

const adhese = createAdhese({
  account: 'demo',
  plugins: [(_, {
    hooks: {onInit},
  }): {name: 'custom'} => {
    onInit(() => {
      // Example hook that runs when the SDK is initialized
    })

    return {
      name: 'custom'
    }
  }]
});

export default adhese;
