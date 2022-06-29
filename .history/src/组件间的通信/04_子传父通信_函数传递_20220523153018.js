import React from 'react';
export default function App(){
    const {count,import React from 'react'
    import renderer from 'react-test-renderer'
    import { Provider } from 'react-redux'
    
    import store from '~/store'
    import { 04_子传父通信_函数传递 } from '../04_子传父通信_函数传递'
    
    describe('<04_子传父通信_函数传递 />', () => {
      const defaultProps = {}
      const wrapper = renderer.create(
        <Provider store={store}>
         <04_子传父通信_函数传递 {...defaultProps} />
        </Provider>,
      )
    
      test('render', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })}
    return(
        <div></div>
     )
}