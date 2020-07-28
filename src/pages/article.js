import React from "react"
import Layout from "../components/Layout"

const catSrc =
  "https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <div className="row">
        <div className="col-12">
          <h2>My Article</h2>
          <img src={catSrc} alt="Cat!" />
        </div>
        <div className="col-12 ">
          <h4>Introduction</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tristique ipsum ultricies massa pharetra posuere. Curabitur lectus
            justo, lobortis placerat facilisis ut, fringilla sed ante. Maecenas
            feugiat ante sit amet vestibulum facilisis. Praesent mollis ante
            quis tempus placerat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Fusce semper, enim ut
            fermentum fermentum, nisi magna faucibus mauris, ut tincidunt arcu
            turpis quis lacus. Donec id faucibus erat. Quisque vel dolor
            placerat, eleifend lorem ut, mollis massa. Donec pellentesque
            rhoncus erat.
          </p>
          <p>
            Fusce lectus felis, egestas a malesuada at, sollicitudin vel nulla.
            Donec pellentesque, tortor et sollicitudin viverra, purus eros
            faucibus lectus, et mattis nisi purus sit amet odio. Morbi ac risus
            vitae ligula commodo tincidunt. Aliquam lorem ipsum, consectetur
            vitae elementum ut, condimentum id orci. Ut eget feugiat neque, quis
            egestas ligula. Phasellus at erat quis lacus ornare lacinia id vel
            dolor. Nunc vitae libero vulputate, cursus ipsum ac, vehicula risus.
            Curabitur congue vehicula condimentum. Maecenas ultricies tellus vel
            orci venenatis tincidunt. Quisque efficitur vulputate semper.
          </p>
          <p>
            Praesent consequat turpis gravida, rutrum neque vel, pulvinar
            libero. Aliquam in leo nec tortor vulputate mattis quis fermentum
            odio. Curabitur nec ex ut nulla sagittis placerat bibendum quis
            metus. Aliquam fermentum scelerisque diam vel pellentesque. Morbi
            nec justo sed sem fringilla auctor. Vestibulum non tristique lacus.
            Sed at molestie libero, eget tempus dui. Ut luctus vitae diam vitae
            malesuada. Curabitur arcu odio, blandit in iaculis nec, fermentum
            nec massa. Suspendisse consectetur sapien auctor, gravida metus non,
            placerat augue. Ut sed ante turpis.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque facilisis vel libero a auctor. Duis eu dolor libero.
            Donec nec tortor ut tellus cursus sollicitudin. Nullam faucibus nisl
            in varius tincidunt. Quisque commodo, turpis at mollis vulputate,
            elit mauris dignissim enim, ac bibendum massa elit id odio. Nam quis
            magna massa.
          </p>
          <h4>Conclusion</h4>
          <p>
            Quisque turpis ligula, euismod sed augue quis, euismod mollis quam.
            Nullam ultricies mauris nec condimentum faucibus. Mauris convallis
            tincidunt diam at lacinia. Nunc sed urna erat. Suspendisse sem quam,
            interdum in volutpat id, consequat a lectus. Maecenas molestie
            efficitur sem, vitae vehicula nunc malesuada eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec ut leo in purus
            sagittis pellentesque.
          </p>
        </div>
        <div className="col-12 center">
          <h4>Rate this post.</h4>
          <sl-rating precision=".5" value="4"></sl-rating>
        </div>
      </div>
    </Layout>
  )
}
