package com.dtstack.rdos.engine.execution.spark210;

import com.dtstack.rdos.engine.execution.base.IClient;
import com.dtstack.rdos.engine.execution.base.restart.IRestartStrategy;

/**
 * Reason:
 * Date: 2018/1/25
 * Company: www.dtstack.com
 * @author xuchao
 */

public class SparkRestartStrategy implements IRestartStrategy {

    private final static String SPARK_ENGINE_DOWN = "Current state is not alive: STANDBY";

    @Override
    public boolean checkFailureForEngineDown(String msg) {
        if(msg != null && msg.contains(SPARK_ENGINE_DOWN)){
            return true;
        }

        return false;
    }

    @Override
    public boolean checkNOResource(String msg) {
        return false;
    }

    @Override
    public boolean checkCanRestart(String engineJobId, IClient client) {
        return false;
    }
}
