import React from 'react';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Parts
import {
  LoadingOverlay,
} from 'Components';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ MOCK

const dataRequestMockData = request => awaitThis({request});
const awaitThis = (data, delay=1000) => new Promise(
  (resolve, reject) => {
    try {
      setTimeout(f => resolve(data), delay);
    } catch (error) { reject(error) };
  }
);

const RenderDataObject = ({
  data = {},
}) => (<>
    {Object.entries(data).map(
      ([key,val],indexKey) =>(
        <Stack key={indexKey} direction="row" spacing={1}>
          <Box>{key}</Box> : <Box>{val}</Box>
        </Stack>
      )
    )}
</>);

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component = ({
  dataPropID = '',
}={} )=>{
  const [
    loading,
    loadingSet,
  ] = React.useState(false);
  const [
    dataValueLoading,
    dataValueLoadingSet,
  ] = React.useState(false);
  React.useEffect(
    () => loadingSet(dataValueLoading)
    ,[dataValueLoading]
  );

  const [
    dataValue,
    dataValueSet,
  ] = React.useState({});

  const loadData = async ({dataPropID}) => {
    // setup
    const setLoading = dataValueLoadingSet;
    const setValue   = dataValueSet;
    const source  = dataRequestMockData;
    const request = {id:dataPropID};
    let response;
    // run
    setLoading(true);
    response = await source(request);
    setValue(response);
    setLoading(false);
  };

  // Runtime

  React.useEffect(
    () => loadData({dataPropID})
    ,[dataPropID]
  );

  return (
    <section>
      <LoadingOverlay loading={loading} />
      <RenderDataObject data={dataValue} />
    </section>
  );
};
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const   DataLoaderCombo = Component;
export default DataLoaderCombo ;
