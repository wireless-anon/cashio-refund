import clsx from 'clsx'
import type { NextPage } from 'next'
import { useState } from 'react'
import Sign from '../components/Sign'
import { FAQ_MESSAGE, FORMAT, MESSAGE_PLACEHOLDER } from '../constants'
import nacl from 'tweetnacl'

function download(filename: string, text: string) {
  var element = document.createElement('a')
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  )
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

const Submit: NextPage = () => {
  const [text, setText] = useState('')
  const handler = async ({
    publicKey,
    message,
    signature,
    publicKeyBuffer,
  }: any) => {
    if (
      !nacl.sign.detached.verify(
        Buffer.from(message, 'base64'),
        Buffer.from(signature, 'base64'),
        publicKeyBuffer.toBuffer()
      )
    ) {
      alert(
        'WARNING: Something went wrong with verifying the validity of the signature. Downloading anyways...'
      )
    }
    download(
      `cashio_refund_${publicKey.substring(0, 8)}.txt`,
      `public key:\n${publicKey}\n\nbase64 message:\n${message}\n\nbase64 signature:\n${signature}`
    )
  }

  return (
    <>
      <p className="mt-5 text-lg text-neutral-800">
        Use this page to create your refund request.
      </p>
      <p className="mt-5 text-lg text-neutral-800">FAQ</p>
      <div
        className={clsx(
          'rounded-lg border border-neutral-300 bg-neutral-100',
          'max-w-full px-2 py-1 font-mono text-neutral-500',
          'mt-4'
        )}
        style={{ whiteSpace: 'break-spaces' }}
      >
        {FAQ_MESSAGE}
      </div>
      <p className="mt-5 text-lg text-neutral-800">Format</p>
      <div
        className={clsx(
          'rounded-lg border border-neutral-300 bg-neutral-100',
          'max-w-full px-2 py-1 font-mono text-neutral-500',
          'mt-4'
        )}
        style={{ whiteSpace: 'break-spaces' }}
      >
        {FORMAT}
      </div>
      <p className="mt-5 text-lg text-neutral-800">Message</p>
      <textarea
        className={clsx(
          'rounded-lg border border-neutral-300 bg-neutral-100',
          'min-h-[200px] w-full px-2 py-1 font-mono text-neutral-500',
          'mt-4 outline-neutral-300'
        )}
        placeholder={MESSAGE_PLACEHOLDER}
        style={{ whiteSpace: 'break-spaces' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Sign
        className="mt-8 mb-20"
        message={'cashio.app refund submission:\n\n' + text}
        onSubmit={handler}
      />
    </>
  )
}

export default Submit
