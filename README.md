# 🍠  YAM Protocol  🍠
## The Protocol
YAM protocol is a cryptocurrency built on the Ethereum blockchain. It is designed to create a soft price peg (but could be valueless) against any reserve asset by leveraging an elastic monetary supply to reward holders and a protocol governed treasury.

The token inflates and deflates its monetary supply in order to stabilze its peg (called a rebase). It is innovative by adding a treasury building mechanism into the rebase.

In a sense, YAM = AMPL + COMP + YFI + MKR. Rebasing mechanism akin to Ampleforth. COMP style-governance. YFI distribution. Maker peg creation.

That said, there is no guarantees around the peg. It may trade at a fraction of the intended peg, or much higher. Its price is determined by the market, with some reflexive mechanisms to promote but not ensure the peg.

## The Token
The core YAM token uses yCRV as the reserve currency, which is roughly a $1 peg. Each inflating rebase, a portion of tokens is minted and used to build up the treasury. This treasury is then in complete ownership of $YAM holders via governance.


## Distribution
It is undergoing a fair distribution - no premine, no VCs, no founders' shares. It is designed to be decentralized and autonomous.

Distribution is accomplished by utilizing the same method that YFI popularized. You can stake ETH, YFI, or AMPL/ETH uniswap shares to earn YAMs.

## Governance
Governance is entirely dictated by YAM holders from the start. Upon deployment, ownership of all YAM protocol contracts was reliquished to the Governance contract or removed entirely.

# Development
### Building
This repo uses truffle. Ensure that you have truffle installed.

Then, to build the contracts run:
```
$ truffle compile
```

To run tests:
```
$ truffle test
```

Given the nature of rebases interacting with Uniswap, it may be helpful to run a fork of mainnet in ganache.
```
$ ganache-cli --fork <eth_rpc_url>@latest --networkId 1001 --gasPrice 0x1312D00 -e 100000000000000000000 --gasLimit 8000000  --mnemonic="concert load couple harbor equip island argue ramp clarify fence smart topic" --max-old-space-size=8192
```

#### Attributions
Much of this code base is modified from existing works, including:

[Compound](compound.finance) - Jumping off point for token code and governance

[Ampleforth](ampleforth.org) - Initial rebasing mechanism, modified to better suit the YAM protocol

[Synthetix](synthetix.io) - Rewards staking contract

[YEarn](yearn.finance)/[YFI](ygov.finance) - Initial fair distribution implementation