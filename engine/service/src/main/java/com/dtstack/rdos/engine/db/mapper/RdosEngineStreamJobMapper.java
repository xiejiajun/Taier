package com.dtstack.rdos.engine.db.mapper;

import org.apache.ibatis.annotations.Param;

import com.dtstack.rdos.engine.db.dataobject.RdosEngineStreamJob;

/**
 * 
 * Reason: TODO ADD REASON(可选)
 * Date: 2017年03月03日 下午1:25:18
 * Company: www.dtstack.com
 * @author sishu.yss
 *
 */
public interface RdosEngineStreamJobMapper {
	
    void insert(RdosEngineStreamJob rdosEngineStreamJob);
	
	void updateTaskStatus(@Param("taskId") String taskId, @Param("status") int stauts);

	void updateTaskPluginId(@Param("taskId") String taskId, @Param("pluginId") long pluginId);

	void updateTaskEngineIdAndStatus(@Param("taskId") String taskId,@Param("engineId") String engineId, @Param("status") int stauts);

	void updateTaskEngineId(@Param("taskId") String taskId,@Param("engineId") String engineId);

	RdosEngineStreamJob getRdosTaskByTaskId(@Param("taskId")String taskId);

	void updateEngineLog(@Param("taskId")String taskId, @Param("engineLog")String engineLog);

	void updateSubmitLog(@Param("taskId")String taskId, @Param("submitLog")String submitLog);

}
