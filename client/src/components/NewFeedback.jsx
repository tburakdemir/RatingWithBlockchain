import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select, Divider } from 'semantic-ui-react'
import Axios from 'axios'

export default class MenuExampleStackable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teacherName: "",
            feedback: ""
        }
    }

    handleChange = (e, { name, value, key }) => {
        this.setState({ [name]: value })

        console.log(name);
        console.log(value)
        console.log(key);
    }

    submit = (e) => {
        console.log("submitted")
        const { teacherName, feedback } = this.state
        this.setState({ submittedName: teacherName, submittedEmail: feedback })
        this.setState({ teacherName: "" })
        this.setState({ feedback: "" })
        Axios.post("/api/feedbacks", { feedback: { message: feedback, likes: 0, dislikes: 0, postedTo: teacherName, postedBy: "Burak Demir" } })
        console.log(teacherName)
        console.log(feedback)
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

        const { teacherName, feedback } = this.state
        return (
            <div style={{ width: '50%', margin: 'auto', marginTop: '30px' }}>
                <Form onSubmit={() => this.submit()}>

                    <Select
                        required
                        options={teachers}
                        //label={{ children: 'Hocalar', htmlFor: 'form-select-control-gender' }}
                        placeholder='Bir hoca seç'
                        search
                        searchInput={{ id: 'form-select-control-teacher' }}
                        value={teacherName}
                        name="teacherName"
                        onChange={this.handleChange}
                    />
                    <Divider></Divider>
                    <Form.Input
                        required
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        // label='Önerin'
                        placeholder='Önerin'
                        name="feedback"
                        value={feedback}
                        onChange={this.handleChange}
                    />
                    <Button type='submit'>Gönder</Button>
                </Form>
            </div>
        );
    }
}