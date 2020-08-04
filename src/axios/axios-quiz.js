import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-bc22d.firebaseio.com/'
})