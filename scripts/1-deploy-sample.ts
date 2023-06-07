async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { contract: sample, tx } = await locklift.factory.deployContract({
    contract: "BountyBoard",
    publicKey: signer.publicKey,
    initParams: {
      _nonce: locklift.utils.getRandomNonce(),
    },
    constructorParams: {
    },
    value: locklift.utils.toNano(3),
  });

  console.log(`Sample deployed at: ${sample.address.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
