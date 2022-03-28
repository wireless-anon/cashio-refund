import clsx from 'clsx'
import type { NextPage } from 'next'
import { ATTACKER_MESSAGE } from '../constants'

const Home: NextPage = () => {
  return (
    <>
      <p className="mt-5 text-lg text-neutral-800">
        This site was created by{' '}
        <a
          href="https://twitter.com/wireless_anon"
          className="text-blue-400 hover:underline"
          target="_blank"
        >
          @wireless_anon
        </a>{' '}
        to help victims of the cashio.app hack create refund requests. The code
        for this website is{' '}
        <a
          href="https://github.com/wireless-anon"
          className="text-blue-400 hover:underline"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p className={clsx('mt-5 text-lg text-neutral-800')}>
        Attacker's Message (
        <a
          href="https://etherscan.io/tx/0xb34bbfe78d56eac5576157671f9735d6888f89e8e4af2b1b7d6a2ffdecd90451"
          className="text-blue-400 hover:underline"
          target="_blank"
        >
          link
        </a>
        )
      </p>
      <div
        className={clsx(
          'rounded-lg border border-neutral-300 bg-neutral-100',
          'max-w-full px-2 py-1 font-mono text-neutral-500',
          'mt-5 mb-20'
        )}
        style={{ whiteSpace: 'break-spaces' }}
      >
        {ATTACKER_MESSAGE}
      </div>
    </>
  )
}

export default Home
