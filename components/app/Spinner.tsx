import { ThreeDots } from 'react-loader-spinner'

export default function Spinner() {
  return (
    <div className="flex w-full items-center justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#1F7E3D"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}
