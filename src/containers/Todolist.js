import { connect } from 'react-redux';
import Todolist from '../components/Todolist';
import { addTodo, setTodos, fetchTodos } from '../redux/todo'

const mapStateToProps = (state) => {
    return {
        todos: state.todo.items
    }
}
const mapActionToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodo(text)),
    setTodos: (items) => dispatch(setTodos(items)),
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapActionToProps)(Todolist);