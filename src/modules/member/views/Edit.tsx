import DialogPage from '@elux-admin-antd/stage/components/DialogPage';
import {loadingPlaceholder} from '@elux-admin-antd/stage/utils/tools';
import {Dispatch, exportView} from '@elux/react-web';
import {Skeleton} from 'antd';
import {FC, memo} from 'react';
import {ItemDetail} from '../entity';
import EditorForm from './EditorForm';

interface Props {
  listUrl: string;
  dispatch: Dispatch;
  itemDetail?: ItemDetail;
}

const Component: FC<Props> = ({itemDetail, dispatch, listUrl}) => {
  const title = loadingPlaceholder(itemDetail && (itemDetail.id ? '修改用户' : '新增用户'));
  return (
    <DialogPage title={title} subject={title} mask>
      <div className="g-dialog-content" style={{width: 600}}>
        {itemDetail ? <EditorForm itemDetail={itemDetail} dispatch={dispatch} listUrl={listUrl} /> : <Skeleton active />}
      </div>
    </DialogPage>
  );
};

export default exportView(memo(Component));
