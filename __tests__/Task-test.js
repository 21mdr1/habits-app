import renderer from 'react-test-renderer';
import Task from '../components/Task/Task';

test('renders correctly', () => {
    const tree = renderer.create(<Task />).toJSON();
    expect(tree).toMatchSnapshoT();
});