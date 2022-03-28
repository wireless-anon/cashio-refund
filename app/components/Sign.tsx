import clsx from 'clsx'
import React, { FC } from 'react'

interface Props {
  message: string
  onSubmit: any
  className: string
}

const Sign: FC<Props> = (props) => {
  const handler = async () => {
    try {
      const solana: any = (window as any).solana
      if (!solana || !solana.signMessage)
        throw new Error('Please install Phantom wallet')
      await solana.connect()
      const encodedMessage = new TextEncoder().encode(props.message)
      const signedMessage = await solana.signMessage(encodedMessage, 'utf8')
      props.onSubmit({
        publicKeyBuffer: signedMessage.publicKey,
        publicKey: signedMessage.publicKey.toBase58(),
        message: Buffer.from(props.message).toString('base64'),
        signature: signedMessage.signature.toString('base64'),
      })
    } catch (e: any) {
      if (e.message && !e.message.includes('User rejected')) {
        alert(e.message)
      }
    }
  }

  return (
    <button
      className={clsx(
        'rounded-lg bg-blue-400 px-2 py-1 text-neutral-100',
        'border-none text-lg outline-none',
        props.className
      )}
      onClick={handler}
    >
      sign message
    </button>
  )
}

export default Sign
