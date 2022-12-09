import { Nav } from '../components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

export default function LandingPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className='landingPage'>
      <Nav />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col display-3 d-flex text-center align-items-center justify-content-center vh-100'>
            Have a secret that you want to share anonymously?
          </div>
          <div className='col'>
            <div className='row h-45'>
              <div className='col m-4 bg-white'>
                <div className='mt-3'>Holder Username</div>
                <div className='mt-3'>Title Here</div>
                <div className='mt-4'>
                  asdhlajsflkas ajsl asld klajsdjl ajskd jasj l daks djlasd jaks
                  ljjzxkcljkl kjqwejljqj lksjd lkj ajdjl kajsd kljaljsld jakjs
                  kdjal fka lkd jasklj jaskld jlajs j jlas jdkaj skdj jlaks d
                  akls djlaksj ljdasj kdklwkakj lkjaskj kjdalsk dalks jdlkajskl
                  djkakl jsakdl jalkdjlk
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
                <div className='mt-3'>Holder Username</div>
                <div className='mt-3 '>Title Here</div>
                <div className='mt-4'>
                  asdhlajsflkas ajsl asld klajsdjl ajskd jasj l daks djlasd jaks
                  ljjzxkcljkl kjqwejljqj lksjd lkj ajdjl kajsd kljaljsld jakjs
                  kdjal fka lkd jasklj jaskld jlajs j jlas jdkaj skdj jlaks d
                  akls djlaksj ljdasj kdklwkakj lkjaskj kjdalsk dalks jdlkajskl
                  djkakl jsakdl jalkdjlk
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
                <div className='mt-3'>Holder Username</div>
                <div className='mt-3 '>Title Here</div>
                <div className='mt-4'>
                  asdhlajsflkas ajsl asld klajsdjl ajskd jasj l daks djlasd jaks
                  ljjzxkcljkl kjqwejljqj lksjd lkj ajdjl kajsd kljaljsld jakjs
                  kdjal fka lkd jasklj jaskld jlajs j jlas jdkaj skdj jlaks d
                  akls djlaksj ljdasj kdklwkakj lkjaskj kjdalsk dalks jdlkajskl
                  djkakl jsakdl jalkdjlk
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
