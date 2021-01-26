import { Theme, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const CustomTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#4F4F4F',
    opacity: 0.9,
    color: '#FFFFFF',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

export default CustomTooltip;
