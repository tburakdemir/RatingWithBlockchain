import React from 'react'
import axios from 'axios'
import { Feed, Icon, ItemDescription } from 'semantic-ui-react'
import Moment from 'react-moment';
import 'moment/locale/tr'



export default class MyFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            feedbacks: []
        }

    }
    clickLike = (id) => {
        console.log("like")
        console.log(id)
        var newArr = this.state.feedbacks.slice() //copy the array
        newArr[id].likes = newArr[id].likes + 1 //execute the manipulations
        console.log(newArr[id].likes)
        this.setState({ feedback: newArr }) //set the new state
        this.state.feedbacks.forEach(elem => console.log(elem))


    }
    clickDislike(id) {
        console.log("dislike")
        var newArr = this.state.feedbacks.slice() //copy the array
        newArr[id].dislikes = newArr[id].dislikes + 1 //execute the manipulations
        console.log(newArr[id].dislikes)
        this.setState({ feedback: newArr }) //set the new state
    }

    componentWillMount() {
        axios.get('/api/feedbacks').then(res => {
            console.log("feedbacks")
            console.log(res.data)
            this.setState({ feedbacks: res.data })
        })
    }

    render() {
        const renderItems = this.state.feedbacks.map((item, i) => {

            return <Feed.Event key={item._id}>
                <Feed.Label image={item.avatar} />
                <Feed.Content>
                    <Feed.Date><Moment locale='tr' fromNow>{item.createdAt}</Moment></Feed.Date>
                    <Feed.Summary>
                        <a>{item.postedBy}</a> <a>{item.postedTo}</a> hakkında bir geri bildirim yazdı.
                    </Feed.Summary>
                    <Feed.Extra text>
                        {item.message}
                    </Feed.Extra>
                    <Feed.Meta>
                        <Feed.Like>
                            <Icon name='thumbs up' onClick={this.clickLike.bind(this, i)} />{item.likes} like
                        </Feed.Like>
                        <Feed.Like>
                            <Icon name='thumbs down' onClick={this.clickDislike.bind(this, i)} />{item.dislikes} dislike
                         </Feed.Like>
                        <Feed.Like>
                            <Icon name='chain' color='green' />
                        </Feed.Like>
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
        });
        return (
            <Feed>
                {renderItems}
            </Feed>
        );

    }
}