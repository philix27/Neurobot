import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs'

export function AppTabs(props: { data: { title: string; content: JSX.Element }[] }) {
  return (
    <Tabs defaultValue={props.data[0].title} className="w-[400px]">
      <TabsList className={`flex w-full flex-row justify-between`}>
        {props.data.map((val, i) => (
          <TabsTrigger key={i} value={val.title} className="w-full">
            {val.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {props.data.map((val, i) => (
        <TabsContent key={i} value={val.title}>
          {val.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
