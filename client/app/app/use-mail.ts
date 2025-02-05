import { atom, useAtom } from 'jotai'
import type { Mail } from './data';
import { mails } from './data'

type Config = {
  selected: Mail['id'] | null
}

const configAtom = atom<Config>({
  selected: mails[0].id,
})

export function useMail() {
  return useAtom(configAtom)
}
