import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const teachers = [
            { key: 'gokturk', text: 'Mehmet GÖKTÜRK', },
            { key: 'kaya', text: 'Gökhan KAYA', },
            { key: 'mantar', text: 'Hacı Ali MANTAR', },
            { key: 'gozupek', text: 'Didem GÖZÜPEK', },
            { key: 'sevilgen', text: 'Fatih Erdoğan SEVİLGEN' },
            { key: 'zergeroglu', text: 'Erkan ZERGEROĞLU' },
        ]
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Select}
                        options={teachers}
                        //label={{ children: 'Hocalar', htmlFor: 'form-select-control-gender' }}
                        placeholder='Bir hoca seç'
                        search
                        searchInput={{ id: 'form-select-control-teacher' }}
                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    // label='Önerin'
                    placeholder='Önerin'
                />
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}