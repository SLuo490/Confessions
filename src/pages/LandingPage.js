import { Nav } from '../components';

export default function LandingPage() {
  return (
    <div className='landingPage'>
      <Nav />
      <div className='container-fluid position-fixed'>
        <div className='row'>
          {/* <div className='col display-3 d-flex justify-content-center flex-column'>
            <div className='ms-5'>
              Have a secret that you want to share anonymously?
            </div>
            <div className='ms-5 mt-5'>Share It</div>
          </div> */}
          <div className='col display-3 d-flex text-center align-items-center justify-content-center vh-100'>
            Have a secret that you want to share anonymously?
          </div>
          <div className='col mt-5'>
            <div className='row h-45'>
              <div className='col m-4 bg-white'>
                <div className='mt-4 ms-2'>7s14kr</div>
                <div className='mt-3 ms-2'>Title</div>
                <div className='mt-4 ms-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  reprehenderit maxime ex facilis dolor ad! Doloremque at nihil
                  atque, vitae voluptates mollitia, laboriosam explicabo dolores
                  et distinctio sapiente esse quos! Adipisci assumenda, porro
                  officia vero a ipsum facere dolorem magnam architecto
                  voluptatum voluptas, cupiditate iusto alias, nobis tenetur
                  quod libero vel quae fuga quo possimus? Possimus molestiae
                  molestias quaerat nobis! Rerum eligendi laborum maiores sint
                  ducimus nisi reprehenderit, possimus odio, minima unde
                  reiciendis eius enim optio iste! Esse illo vitae consequatur
                  doloremque? Atque fuga sequi maiores quod, consequuntur
                  commodi facilis!
                </div>
                <div className='my-3 p-2'>
                  <button className='btn btn-secondary' disabled>
                    6 Comments
                  </button>{' '}
                </div>
              </div>
            </div>
            <div className='row h-40'>
              <div className='col m-4 bg-white'>
                <div className='mt-4 ms-2'>ahx13t</div>
                <div className='mt-3 ms-2'>Title</div>
                <div className='mt-4 ms-2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis officiis facere, accusantium quod ipsam aliquam
                  laboriosam ea tenetur quia cumque laudantium labore non
                  aliquid error at eius. Ducimus, saepe. Laboriosam. Libero
                  blanditiis cupiditate mollitia similique, consectetur eveniet
                  earum rem perferendis culpa illo saepe doloremque dolorem
                  nulla aperiam porro eius magnam ducimus fugit rerum! Vel odio
                  rem, praesentium ad iure natus!
                </div>
                <div className='my-3 p-2'>
                  <button className='btn btn-secondary' disabled>
                    10 Comments
                  </button>{' '}
                </div>
              </div>
            </div>
            <div className='row h-40'>
              <div className='col m-4 bg-white'>
                <div className='mt-4 ms-2'>tyxa31</div>
                <div className='mt-3 ms-2'>Title</div>
                <div className='mt-4 ms-2'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis ipsam excepturi nesciunt dolorum expedita! Natus
                  repudiandae eos sequi dolore. Tempora eaque dolorum inventore
                  praesentium ea modi temporibus aperiam in quibusdam! Sit
                  tempora harum ipsum dolor, deserunt neque doloribus explicabo
                  asperiores incidunt placeat delectus atque magni est aliquid
                  porro cumque, ratione, accusamus sed! Mollitia neque
                  cupiditate officia, incidunt numquam esse aperiam! Modi minus,
                  similique tempore, non, assumenda qui repellat laboriosam
                  cupiditate labore magni blanditiis quaerat! Minima nostrum
                  repellat voluptate atque recusandae veniam quos iure, error
                  debitis voluptates temporibus mollitia voluptatem harum.
                </div>
                <div className='my-3 p-2'>
                  <button className='btn btn-secondary' disabled>
                    2 Comments
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
