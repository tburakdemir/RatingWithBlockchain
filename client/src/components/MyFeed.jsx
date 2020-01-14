import React from 'react'
import axios from 'axios'
import { Feed, Icon, Dropdown } from 'semantic-ui-react'
import Moment from 'react-moment';
import 'moment/locale/tr'



export default class MyFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            feedbacks: [],
            filteredFeedbacks: []
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

    componentDidMount() {
        axios.get('/api/feedbacks').then(res => {
            console.log("feedbacks")
            console.log(res.data)
            this.setState({ feedbacks: res.data })
            this.setState({ filteredFeedbacks: res.data })
        })
    }

    filterItems = () => {
        console.log("Close dropdown");
        //console.log(this.state.value);
    }

    handleChange = (e, { value }) => {
        this.setState({ value })
        console.log(value);
        axios.get(`/api/feedbacks?teacher=${value}`).then(res => {
            console.log("filtered");
            this.setState({ filteredFeedbacks: res.data })
        })

    }
    render() {

        const teachers = [
            { key: 'gokturk', text: 'Mehmet GÖKTÜRK', value: 'Mehmet GÖKTÜRK' },
            { key: 'kaya', text: 'Gökhan KAYA', value: 'Gökhan KAYA' },
            { key: 'mantar', text: 'Hacı Ali MANTAR', value: 'Hacı Ali MANTAR' },
            { key: 'gozupek', text: 'Didem GÖZÜPEK', value: 'Didem GÖZÜPEK' },
            { key: 'sevilgen', text: 'Fatih Erdoğan SEVİLGEN', value: 'Fatih Erdoğan SEVİLGEN' },
            { key: 'zergeroglu', text: 'Erkan ZERGEROĞLU', value: 'Erkan ZERGEROĞLU' },
        ]

        const renderItems = this.state.filteredFeedbacks.map((item, i) => {

            return <Feed.Event key={item._id}>
                <Feed.Label image={item.avatar} />
                <Feed.Content>
                    <Feed.Date><Moment locale='tr' fromNow>{item.createdAt}</Moment></Feed.Date>
                    <Feed.Summary>
                        <a href={`/students/${item.postedBy}`}>{item.postedBy}</a> <a>{item.postedTo}</a> hakkında bir geri bildirim yazdı.
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
            <div>
                <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={teachers}
                    onClose={this.filterItems}
                    onChange={this.handleChange}
                />
                <Feed>
                    {renderItems}
                </Feed>
            </div>
        );

    }
}