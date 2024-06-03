import {createAdhese} from "@adhese/sdk";

const adhese = createAdhese({
  account: 'demo',
  plugins: [(_, {
    onRender,
    onInit,
  }) => {
    onInit(() => {
      // Example hook that runs when the SDK is initialized
    })

    onRender(() => {
        // Example hook that runs when the SDK renders a slot
      }
    )
  }]
});

export default adhese;
