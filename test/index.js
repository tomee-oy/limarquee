import LiMarquee from '../lib/index.bundle.js'
import './index.css'
const liMarquee = new LiMarquee('.limarquee')
liMarquee.render({
  direction: 'up',
  scrollamount: 30
})