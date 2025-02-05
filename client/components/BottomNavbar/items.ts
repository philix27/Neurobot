import { IconType } from 'react-icons'
import { BiBook } from 'react-icons/bi'
import { MdDashboard, MdGroups3, MdQuiz } from 'react-icons/md'

export const NavItems: { title: string; Icon: IconType; link: string; key: string }[] = [
  {
    title: 'Dashboard',
    Icon: MdDashboard,
    link: '/app/dashboard',
    key: 'dashboard',
  },
  {
    title: 'Courses',
    Icon: BiBook,
    link: '/app/courses',
    key: 'courses',
  },
  {
    title: 'Quiz',
    Icon: MdQuiz,
    link: '/app/quiz',
    key: 'quiz',
  },
  // {
  //   title: 'Forums',
  //   Icon: MdGroups3,
  //   link: '/app/forums',
  //   key: 'forums',
  // },
]
