const wrapperError = (fn: any) => async (req: any, res: any) => {
    try {
      await fn(req, res);
    } catch (error) {
      // console.log(error.stack.split('\n').map(line => line.trim())[1])
      sendError(res, error);
    }
  };