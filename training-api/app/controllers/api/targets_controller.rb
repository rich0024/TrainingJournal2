class Api::TargetsController < ApplicationController
    def index
        @targets = Target.all

        render json: @targets, status: 200
    end

    def show
        @target = Target.find(params[:id])

        render json: @target, status: 200
    end

    def create
        @target = Target.create(target_params)

        render json: @target, status: 200
    end

    def update
        @target = Target.find(params[:id])
        @target.update(target_params)

        render json: @target, status: 200
    end

    def destroy
        @target = Target.find(params[:id])
        @target.delete

        render json: {targetId: @target.id}
    end
        

    private
        def target_params
            params.require(:target).permit(:name)
        end
end
