import Row from '../components/Row'
import Button from '../components/Button'

export default function Home() {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='border rounded p-4'>
        <Row>
          <input type='text' className='w-full h-10 py-2 px-4 font-mono bg-[--background-rgb] border rounded m-1' />
        </Row>
        <Row>
          <Button title='7' onClick={() => console.log('7')}/>
          <Button title='8' onClick={() => console.log('8')}/>
          <Button title='9' onClick={() => console.log('9')}/>
          <Button title='/' onClick={() => console.log('/')}/>
        </Row>
        <Row>
          <Button title='4' onClick={() => console.log('4')}/>
          <Button title='5' onClick={() => console.log('5')}/>
          <Button title='6' onClick={() => console.log('6')}/>
          <Button title='*' onClick={() => console.log('*')}/>
        </Row>
        <Row>
          <Button title='1' onClick={() => console.log('1')}/>
          <Button title='2' onClick={() => console.log('2')}/>
          <Button title='3' onClick={() => console.log('3')}/>
          <Button title='-' onClick={() => console.log('-')}/>
        </Row>
        <Row>
          <Button title='.' onClick={() => console.log('.')}/>
          <Button title='0' onClick={() => console.log('0')}/>
          <Button title='=' onClick={() => console.log('=')}/>
          <Button title='+' onClick={() => console.log('+')}/>
        </Row>
      </div>
    </main>
  )
}
