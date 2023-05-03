import DarkModeSwitch from './DarkModeSwitch';

type Props = {}

export default function Header({}: Props) {
  
  return (
    <>
      <div className='flex h-20 justify-between items-center'>
        <div className='m-3 text-xl'>
          icons
        </div>
        <div className='flex-2 flex justify-between text-5xl font-normal'>
          <div className='m-10 hover:text-gray-500'>
            개 발
          </div>
          <div className='m-10 hover:text-gray-500'>
            일 기
          </div>
          <div className='m-10 hover:text-gray-500'>
            생 각
          </div>
        </div>
        <div className='flex'>
          <div className='m-3'>
            <DarkModeSwitch />
          </div>
          <div className='m-3 text-xl'>
            menu
          </div>
        </div>
      </div>
    </>
  )
}