import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './components'
import { UIButton } from 'ui'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="secondary">Cancel</Button>
      <UIButton />
    </div>
    <Logo />
  </div>
)

export default App
