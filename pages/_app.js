import { Toaster } from '@/components/Toaster';
import '@/global.css';
import { FontMerriweather, FontRoboto } from '@/styles/font';

const App = ({ Component, pageProps }) => (
    <>
      <style jsx global>
        {`
          :root {
            --font-merriweather: ${FontMerriweather.style.fontFamily};
            --font-roboto: ${FontRoboto.style.fontFamily}
          }
        `}
      </style>
      <Toaster>
        <Component {...pageProps} />
      </Toaster>
    </>
)

export default App;