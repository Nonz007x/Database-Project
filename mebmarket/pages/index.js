import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ItemSmall from '@/components/ItemSmall'
import '@fontsource/roboto/400.css';

export default function Home() {
  const items = [
    {
      title:"Darwin Game Vol.24",
      src:"https://pbs.twimg.com/media/E9Tnm67VgAgqUS4?format=jpg&name=4096x4096",
      price:"90"
    },
    {
      title:"Bocchi",
      src:"https://64.media.tumblr.com/ed27452689a63a13273c957e261fde10/bbfeb994b3d02db0-51/s1280x1920/368cf5fe059f6f770240bf186a288adeb37921b8.jpg",
      price:"120"
    },
    {
      title:"Kaiju No.8",
      src:"https://i0.wp.com/akibatan.com/wp-content/uploads/2022/02/kaiju-no8-jojolion-oshi-no-ko-and-more-nominated-for-26th-tezuka-osamu-manga-award-03.jpg?ssl=1",
      price:"160"
    },
    {
      title:"Chainsaw man Vol.12",
      src:"https://pbs.twimg.com/media/FdMNYFkWAAAxu4k.jpg",
      price:"95"
    },{
      title:"ก้าวแรกอ่านงบการเงิน กับ Mr.Likestock",
      src:"https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160845088L.jpg?h=21ef3a52bbaa4c18b563a50b0f28ba77",
      price:"200"
    }
  ];
  const mapping = items.map((property,index)=>{
    return <ItemSmall key={index} property={property}/>
  });
  return (
    <>
      <Head>
        <title>Meb clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='CenterChild'>
        <div className="App">
          <div className='ItemsBox'>
            {mapping}
          </div>
        </div>
      </div>
      
    </>
  )
}
