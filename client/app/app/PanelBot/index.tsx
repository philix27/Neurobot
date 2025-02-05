import { ResizableHandle, ResizablePanel } from 'components/ui/resizable'
import React from 'react'

export default function PanelBot() {
  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} minSize={30}>
        <div>PanelBot, nothing more </div>
      </ResizablePanel>
    </>
  )
}
